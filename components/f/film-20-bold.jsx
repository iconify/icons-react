import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivpnqg4j.css';
import '../../css/u/uwqm8ubbj.css';
import '../../css/i/i2u0zab4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivpnqg4j"/><path class="uwqm8ubbj"/><path class="i2u0zab4a"/>`,
		"fallback": "energy-icons:film-20-bold",
	});
}

export default Component;
