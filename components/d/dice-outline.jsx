import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/h9oaxvcra.css';
import '../../css/g/gjec0m8na.css';
import '../../css/n/n90lmotbw.css';
import '../../css/z/zg6igub2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="h9oaxvcra"/><circle class="gjec0m8na"/><circle class="n90lmotbw"/><rect class="zg6igub2v"/></g>`,
		"fallback": "bitcoin-icons:dice-outline",
	});
}

export default Component;
