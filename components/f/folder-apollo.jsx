import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6_kf7bqk.css';
import '../../css/c/cc8cr8bjt.css';
import '../../css/c/c46-9_ypa.css';
import '../../css/n/n1ppsob_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6_kf7bqk"/><g class="cc8cr8bjt"><path class="c46-9_ypa"/><path class="n1ppsob_d"/></g>`,
		"fallback": "material-icon-theme:folder-apollo",
	});
}

export default Component;
