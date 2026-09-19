import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbpq65m9a.css';
import '../../css/k/k_0btnw4n.css';
import '../../css/u/ukkseuxmb.css';
import '../../css/u/u-93mqbgq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbpq65m9a"/><use href="#SVGD0oThevo"/><path class="k_0btnw4n"/><use x="23.9" href="#SVGD0oThevo"/><path class="ukkseuxmb"/><defs><path id="SVGD0oThevo" class="u-93mqbgq"/></defs>`,
		"fallback": "devicon-plain:elixir-wordmark",
	});
}

export default Component;
