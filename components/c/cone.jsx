import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/a/ar5pfqbcg.css';
import '../../css/y/ya1a-9i3s.css';
import '../../css/e/eyu29obsy.css';
import '../../css/y/ywr789bph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="ar5pfqbcg"/><path class="ya1a-9i3s"/><path class="eyu29obsy"/><path class="ywr789bph"/></g>`,
		"fallback": "streamline-kameleon-color:cone",
	});
}

export default Component;
