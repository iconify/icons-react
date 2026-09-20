import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zphcu1bzl.css';
import '../../css/y/yvrgpkbpr.css';
import '../../css/r/rbej42bij.css';
import '../../css/n/n7vgbrb4x.css';
import '../../css/o/o1-pbuanu.css';
import '../../css/s/sc_r7wb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zphcu1bzl"/><path class="yvrgpkbpr"/><path class="rbej42bij"/><path class="n7vgbrb4x"/><path class="o1-pbuanu"/><path class="sc_r7wb1j"/>`,
		"fallback": "material-icon-theme:bazel",
	});
}

export default Component;
