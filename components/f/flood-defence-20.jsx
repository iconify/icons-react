import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laitt1gtv.css';
import '../../css/t/tqdr_mbdb.css';
import '../../css/k/k153fdm9a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laitt1gtv"/><path class="tqdr_mbdb"/><path class="k153fdm9a"/>`,
		"fallback": "energy-icons:flood-defence-20",
	});
}

export default Component;
