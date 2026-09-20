import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzr61tbtm.css';
import '../../css/d/d-6vdibyb.css';
import '../../css/y/yb06lccjp.css';
import '../../css/t/tcn-xl5yi.css';
import '../../css/x/xiamkcxub.css';
import '../../css/y/yqfxoj6jk.css';
import '../../css/h/h53c51bzl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzr61tbtm"/><path class="d-6vdibyb"/><path class="yb06lccjp"/><path class="tcn-xl5yi"/><path class="xiamkcxub"/><path class="yqfxoj6jk"/><path class="h53c51bzl"/>`,
		"fallback": "material-icon-theme:hadolint",
	});
}

export default Component;
