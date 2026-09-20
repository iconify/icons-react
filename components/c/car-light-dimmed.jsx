import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/m/m0rwxu.css';
import '../../css/y/yuzzkf.css';
import '../../css/z/zxndow.css';
import '../../css/b/br5pwd.css';
import '../../css/y/ysmgkm.css';
import '../../css/q/qw8aly.css';
import '../../css/z/z_b1hb.css';
import '../../css/b/botfzx.css';
import '../../css/v/v3q0ew.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-40.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7YVmtdnA"><path class="g_1xrq m0rwxu yuzzkf zxndow"/><path class="br5pwd g_1xrq yuzzkf zxndow"/><path class="g_1xrq ysmgkm yuzzkf zxndow"/><path class="g_1xrq qw8aly z_b1hb"/></mask></defs><path mask="url(#SVG7YVmtdnA)" class="botfzx"/><path class="g_1xrq v3q0ew yuzzkf z_b1hb"/>`,
		"fallback": "line-md:car-light-dimmed",
	});
}

export default Component;
