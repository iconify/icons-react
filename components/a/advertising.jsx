import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3zmv4prh.css';
import '../../css/g/g4j0z5btp.css';
import '../../css/q/qc5q56bci.css';
import '../../css/c/csxuofbyq.css';
import '../../css/m/m7yttie2g.css';
import '../../css/f/fnzw-ccdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3zmv4prh"/><g class="g4j0z5btp"><circle class="qc5q56bci"/><path class="csxuofbyq"/></g><path class="m7yttie2g"/><path class="fnzw-ccdk"/>`,
		"fallback": "flat-color-icons:advertising",
	});
}

export default Component;
