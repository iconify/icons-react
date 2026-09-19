import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpi3234uq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpi3234uq"/>`,
		"fallback": "icon-park-outline:font-size-two",
	});
}

export default Component;
