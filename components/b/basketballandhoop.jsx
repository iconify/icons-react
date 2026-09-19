import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8hibqbsu.css';
import '../../css/h/hmbgrpr4i.css';
import '../../css/n/nka5jeb7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8hibqbsu"/><path class="hmbgrpr4i"/><path class="nka5jeb7y"/>`,
		"fallback": "fxemoji:basketballandhoop",
	});
}

export default Component;
