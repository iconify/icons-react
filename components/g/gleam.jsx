import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7behsca.css';
import '../../css/a/av17rs-8h.css';
import '../../css/u/uvs-qupzg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn7behsca"/><path class="av17rs-8h"/><path class="uvs-qupzg"/>`,
		"fallback": "devicon:gleam",
	});
}

export default Component;
