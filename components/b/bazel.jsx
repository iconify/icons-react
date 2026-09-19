import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzc3wz_ne.css';
import '../../css/n/n4bn5wd3v.css';
import '../../css/a/ar-ly0b3a.css';
import '../../css/f/fqpmvkjsn.css';
import '../../css/w/w7mw4keuv.css';
import '../../css/a/awae11bvs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzc3wz_ne"/><path class="n4bn5wd3v"/><path class="ar-ly0b3a"/><path class="fqpmvkjsn"/><path class="w7mw4keuv"/><path class="awae11bvs"/>`,
		"fallback": "devicon:bazel",
	});
}

export default Component;
