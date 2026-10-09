import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftrudtbys.css';
import '../../css/g/gnd-n5ber.css';
import '../../css/z/zawixke2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftrudtbys"/><path class="gnd-n5ber"/><path class="zawixke2s"/>`,
		"fallback": "energy-icons:ice-melt-20-bold",
	});
}

export default Component;
