import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq96hfbrb.css';
import '../../css/e/eo08m305v.css';
import '../../css/w/wmph3wb3a.css';
import '../../css/u/u2o_5bhcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq96hfbrb"/><path class="eo08m305v"/><path class="wmph3wb3a"/><path class="u2o_5bhcg"/>`,
		"fallback": "gcp:identity-aware-proxy",
	});
}

export default Component;
