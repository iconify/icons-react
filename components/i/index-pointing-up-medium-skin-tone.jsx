import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f--rpx6kf.css';
import '../../css/t/t5buo1bcw.css';
import '../../css/o/oxb3w9gic.css';
import '../../css/a/ae9yrbb2y.css';
import '../../css/i/ivyf27zbw.css';
import '../../css/p/pdyz_2yhx.css';
import '../../css/z/z04drlb1l.css';
import '../../css/o/obg34cb1x.css';
import '../../css/w/w3v171ugh.css';
import '../../css/t/txgddvbom.css';
import '../../css/z/zmoi8tb4x.css';
import '../../css/w/w7oyrx5ts.css';
import '../../css/w/w6pf-fdka.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="f--rpx6kf"><path class="t5buo1bcw"/><path class="oxb3w9gic"/><path class="ae9yrbb2y"/><path class="ivyf27zbw"/><path class="pdyz_2yhx"/></g><g class="z04drlb1l"><path class="obg34cb1x"/><path class="w3v171ugh"/><path class="txgddvbom"/><path class="zmoi8tb4x"/><path class="w7oyrx5ts"/><path class="w6pf-fdka"/></g>`,
		"fallback": "openmoji:index-pointing-up-medium-skin-tone",
	});
}

export default Component;
