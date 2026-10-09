import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coivkzecr.css';
import '../../css/a/a0l7r1bnq.css';
import '../../css/z/zxq_-9rwo.css';
import '../../css/o/oz3bcmbbu.css';
import '../../css/h/hg0-cjyiw.css';
import '../../css/g/gak43pbcv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coivkzecr"/><path class="a0l7r1bnq"/><path class="zxq_-9rwo"/><path class="oz3bcmbbu"/><path class="hg0-cjyiw"/><path class="gak43pbcv"/>`,
		"fallback": "energy-icons:house-wind-20-bold",
	});
}

export default Component;
