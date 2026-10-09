import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qob3urb3w.css';
import '../../css/z/zkc3a6ybf.css';
import '../../css/u/u01duyblj.css';
import '../../css/c/c5xbzriem.css';
import '../../css/g/gpd43zbld.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qob3urb3w"/><path class="zkc3a6ybf"/><path class="u01duyblj"/><path class="c5xbzriem"/><path class="gpd43zbld"/>`,
		"fallback": "energy-icons:carbon-sink-20",
	});
}

export default Component;
