import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vgdo3pbyy.css';
import '../../css/s/syjy8lb4w.css';
import '../../css/n/noro5abed.css';
import '../../css/l/lndda3bxv.css';
import '../../css/s/segvt_8iu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZqLcQc7v"><g class="wwvp95byt"><path class="vgdo3pbyy"/><path class="syjy8lb4w"/><path class="noro5abed"/><path class="lndda3bxv"/><path class="segvt_8iu"/></g></mask></defs><path mask="url(#SVGZqLcQc7v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hair-dryer",
	});
}

export default Component;
