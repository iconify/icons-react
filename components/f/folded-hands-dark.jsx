import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7vdaacdg.css';
import '../../css/n/n1opf8b0g.css';
import '../../css/m/mt7jsbbft.css';
import '../../css/k/khh6tltyu.css';
import '../../css/o/ozvmypy9e.css';
import '../../css/r/r49gwqbqh.css';
import '../../css/l/l8pu2sbyf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p7vdaacdg"/><path class="n1opf8b0g"/><path clip-rule="evenodd" class="mt7jsbbft"/><path class="khh6tltyu"/><path clip-rule="evenodd" class="ozvmypy9e"/><path clip-rule="evenodd" class="r49gwqbqh"/><path class="l8pu2sbyf"/></g>`,
		"fallback": "fluent-emoji-flat:folded-hands-dark",
	});
}

export default Component;
