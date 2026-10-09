import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwc5xq_tz.css';
import '../../css/s/snnapq3bv.css';
import '../../css/e/e773tnhiu.css';
import '../../css/e/e4ihh9bih.css';
import '../../css/p/ptk9q0hpo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwc5xq_tz"/><path class="snnapq3bv"/><path class="e773tnhiu"/><path class="e4ihh9bih"/><path class="ptk9q0hpo"/>`,
		"fallback": "energy-icons:ev-charging-hub-48-bold",
	});
}

export default Component;
