import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abdw3sbya.css';
import '../../css/l/lpjx8vm8f.css';
import '../../css/d/d4fb8-n_r.css';
import '../../css/v/v0q86cqji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abdw3sbya"/><path class="lpjx8vm8f"/><path class="d4fb8-n_r"/><path class="v0q86cqji"/>`,
		"fallback": "energy-icons:battery-recycle-48-bold",
	});
}

export default Component;
