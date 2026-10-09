import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5hh3ac5g.css';
import '../../css/q/q761jsrye.css';
import '../../css/g/gpknbotbu.css';
import '../../css/c/ceg2-nwwc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5hh3ac5g"/><path class="q761jsrye"/><path class="gpknbotbu"/><path class="ceg2-nwwc"/>`,
		"fallback": "energy-icons:battery-recycle-20",
	});
}

export default Component;
