import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubixxqbpx.css';
import '../../css/b/bkn6lndtv.css';
import '../../css/k/kkrg8z3mz.css';
import '../../css/i/icfykfbvw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubixxqbpx"/><path class="bkn6lndtv"/><path class="kkrg8z3mz"/><path class="icfykfbvw"/>`,
		"fallback": "energy-icons:community-energy-20",
	});
}

export default Component;
