import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2ykngb7r.css';
import '../../css/b/brphuvboc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2ykngb7r"/><path class="brphuvboc"/>`,
		"fallback": "gis:compass-alt",
	});
}

export default Component;
