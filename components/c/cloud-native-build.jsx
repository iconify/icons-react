import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx6sh7bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx6sh7bfw"/>`,
		"fallback": "thesvg-color:cloud-native-build",
	});
}

export default Component;
