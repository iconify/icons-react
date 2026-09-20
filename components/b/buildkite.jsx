import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq4svq8ys.css';
import '../../css/r/rbmgisbte.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq4svq8ys"/><path class="rbmgisbte"/>`,
		"fallback": "material-icon-theme:buildkite",
	});
}

export default Component;
