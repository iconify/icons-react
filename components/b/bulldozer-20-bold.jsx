import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m69v3r-fa.css';
import '../../css/m/m0f-csihk.css';
import '../../css/o/o8iczsb-w.css';
import '../../css/a/agdapachy.css';
import '../../css/r/rh9ticcru.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m69v3r-fa"/><path class="m0f-csihk"/><path class="o8iczsb-w"/><path class="agdapachy"/><path class="rh9ticcru"/>`,
		"fallback": "energy-icons:bulldozer-20-bold",
	});
}

export default Component;
