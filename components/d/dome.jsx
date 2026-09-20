import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s22o-bsxa.css';
import '../../css/p/pfd--jb9a.css';
import '../../css/b/b0p489byd.css';
import '../../css/u/u0m5zac7a.css';
import '../../css/t/ts05urbpl.css';
import '../../css/p/pz2hrwx2l.css';
import '../../css/a/atzx81bon.css';
import '../../css/h/hdegx5bik.css';
import '../../css/n/n4-qvut3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s22o-bsxa"/><path class="pfd--jb9a"/><path class="b0p489byd"/><path class="u0m5zac7a"/><path class="ts05urbpl"/><path class="pz2hrwx2l"/><path class="atzx81bon"/><path class="hdegx5bik"/><path class="n4-qvut3b"/>`,
		"fallback": "token:dome",
	});
}

export default Component;
