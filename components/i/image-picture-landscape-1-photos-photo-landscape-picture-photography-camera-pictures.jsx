import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/t/tqo7kob6r.css';
import '../../css/n/ny7rq-b3f.css';
import '../../css/z/zb_lynbpp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 7.005 7)" class="yph-txb3i"/><circle class="tqo7kob6r"/><path class="ny7rq-b3f"/><path class="zb_lynbpp"/></g>`,
		"fallback": "streamline:image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures",
	});
}

export default Component;
