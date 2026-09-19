import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vw1o8d0ae.css';
import '../../css/b/bm6ci6bnn.css';
import '../../css/h/hd4mi7i3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="vw1o8d0ae"/><path class="bm6ci6bnn"/><path class="hd4mi7i3d"/></g>`,
		"fallback": "icon-park:gastrointestinal",
	});
}

export default Component;
