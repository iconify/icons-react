import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shndm-bvf.css';
import '../../css/d/d7fixtb7r.css';
import '../../css/l/lghqnqgnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shndm-bvf"/><path class="d7fixtb7r"/><path class="lghqnqgnf"/>`,
		"fallback": "energy-icons:certificate-48-bold",
	});
}

export default Component;
