import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u77uhwbbx.css';
import '../../css/h/hlusmqb_s.css';
import '../../css/f/frrn73b_p.css';
import '../../css/n/na-8m7bnw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u77uhwbbx"/><path class="hlusmqb_s"/><path class="frrn73b_p"/><path class="na-8m7bnw"/>`,
		"fallback": "energy-icons:geiger-counter-20",
	});
}

export default Component;
