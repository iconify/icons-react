import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/diqeztb6w.css';
import '../../css/p/prjwigbsg.css';
import '../../css/z/z19bf84dj.css';
import '../../css/j/jbp6xqbph.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsFil0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsFil0)"><path class="diqeztb6w"/><path class="prjwigbsg"/><path class="z19bf84dj"/><path class="jbp6xqbph"/></g>`,
		"fallback": "circle-flags:fil",
	});
}

export default Component;
