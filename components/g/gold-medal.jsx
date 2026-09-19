import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iadpe-rcf.css';
import '../../css/m/mb9_dccon.css';
import '../../css/k/ksmaa2bot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSbT5NsOJ"><g class="wwvp95byt"><path class="iadpe-rcf"/><path class="mb9_dccon"/><path class="ksmaa2bot"/></g></mask></defs><path mask="url(#SVGSbT5NsOJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:gold-medal",
	});
}

export default Component;
