import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bee52pb2u.css';
import '../../css/y/yl1bn7evw.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bee52pb2u"/><path class="yl1bn7evw"/>`,
		"fallback": "iwwa:add-1d",
	});
}

export default Component;
