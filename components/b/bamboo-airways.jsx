import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7wym1brq.css';
import '../../css/e/eij_89ifm.css';
import '../../css/v/vfp_emomb.css';

const viewBox = {"width":504,"height":504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7wym1brq"/><path class="eij_89ifm"/><path class="vfp_emomb"/>`,
		"fallback": "thesvg-color:bamboo-airways",
	});
}

export default Component;
