import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcim_2ucb.css';
import '../../css/a/amu1h0n4r.css';
import '../../css/p/pgvjdacxw.css';
import '../../css/g/ghp9deben.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcim_2ucb"/><path class="amu1h0n4r"/><path class="pgvjdacxw"/><path class="ghp9deben"/>`,
		"fallback": "energy-icons:export-cable-20-bold",
	});
}

export default Component;
