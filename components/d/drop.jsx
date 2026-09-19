import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssi7s1biy.css';
import '../../css/m/md286fbip.css';
import '../../css/f/fcx7apbsu.css';
import '../../css/o/ouisgrmwz.css';
import '../../css/z/zyqtc0b3c.css';
import '../../css/v/vevvsobzj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ssi7s1biy"/><g class="md286fbip"><path class="fcx7apbsu"/><path class="ouisgrmwz"/><path class="zyqtc0b3c"/><path class="vevvsobzj"/></g></g>`,
		"fallback": "cryptocurrency-color:drop",
	});
}

export default Component;
