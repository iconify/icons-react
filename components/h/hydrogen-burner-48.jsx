import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip5ukpbia.css';
import '../../css/k/ka079q8wr.css';
import '../../css/o/o0gto1_-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip5ukpbia"/><path class="ka079q8wr"/><path class="o0gto1_-j"/>`,
		"fallback": "energy-icons:hydrogen-burner-48",
	});
}

export default Component;
