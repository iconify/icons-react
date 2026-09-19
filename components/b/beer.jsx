import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/a/aoaqowbnh.css';
import '../../css/f/fmzg4fbof.css';
import '../../css/e/eep_kvb3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="aoaqowbnh"/><path class="fmzg4fbof"/><path class="eep_kvb3z"/></g>`,
		"fallback": "icon-park:beer",
	});
}

export default Component;
