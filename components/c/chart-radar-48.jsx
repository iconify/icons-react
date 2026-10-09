import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8dejactp.css';
import '../../css/y/ya6awqbqs.css';
import '../../css/z/z9ltojktb.css';
import '../../css/l/lcws11x4n.css';
import '../../css/a/ab821ijmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8dejactp"/><path class="ya6awqbqs"/><path class="z9ltojktb"/><path class="lcws11x4n"/><path class="ab821ijmx"/>`,
		"fallback": "energy-icons:chart-radar-48",
	});
}

export default Component;
