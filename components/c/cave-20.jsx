import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tztkndb_y.css';
import '../../css/u/ubixxqbpx.css';
import '../../css/x/xnnvlwb_a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tztkndb_y"/><path class="ubixxqbpx"/><path class="xnnvlwb_a"/>`,
		"fallback": "energy-icons:cave-20",
	});
}

export default Component;
