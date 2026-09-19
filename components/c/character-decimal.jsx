import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86rvjbis.css';
import '../../css/b/b-hc40bpi.css';
import '../../css/z/zlrqd59ld.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86rvjbis"/><path class="b-hc40bpi"/><path class="zlrqd59ld"/>`,
		"fallback": "carbon:character-decimal",
	});
}

export default Component;
