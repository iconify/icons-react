import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a99zx0bqt.css';
import '../../css/v/v5yukqbyo.css';
import '../../css/q/qt427xrph.css';
import '../../css/d/d70o3mbef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a99zx0bqt"/><path class="v5yukqbyo"/><path class="qt427xrph"/><path class="d70o3mbef"/>`,
		"fallback": "energy-icons:geothermal-well-48-bold",
	});
}

export default Component;
