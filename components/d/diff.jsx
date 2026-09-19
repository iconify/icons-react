import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vge-i4geh.css';
import '../../css/z/zy5ikon0a.css';
import '../../css/n/nubckybqb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vge-i4geh"/><path class="zy5ikon0a"/><path class="nubckybqb"/></g>`,
		"fallback": "catppuccin:diff",
	});
}

export default Component;
