import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/n/njsy0lg8m.css';
import '../../css/i/ibk_3obac.css';
import '../../css/u/us_48ubxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="njsy0lg8m"/><path class="ibk_3obac"/><path class="us_48ubxv"/>`,
		"fallback": "energy-icons:house-snowflake-48-bold",
	});
}

export default Component;
