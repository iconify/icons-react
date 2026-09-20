import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu4rsu.css';
import '../../css/s/s1ui7u.css';
import '../../css/v/v8jzga.css';
import '../../css/b/b4mqmi.css';
import '../../css/m/m08imu.css';
import '../../css/x/x3g9vp.css';
import '../../css/y/yuzzkf.css';
import '../../css/y/yjdnsn.css';
import '../../css/h/h62ugr.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-24.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu4rsu s1ui7u v8jzga"/><path class="b4mqmi s1ui7u v8jzga"/><path class="m08imu s1ui7u v8jzga"/><path class="s1ui7u x3g9vp yuzzkf"/><path class="s1ui7u yjdnsn yuzzkf"/><path class="h62ugr s1ui7u yuzzkf"/>`,
		"fallback": "line-md:check-list-3-twotone",
	});
}

export default Component;
