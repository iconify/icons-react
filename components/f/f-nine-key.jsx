import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/x/xxkkufbii.css';
import '../../css/n/nhgwd5bhv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuhxuCM1t"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="xxkkufbii"/><path class="nhgwd5bhv"/></g></mask></defs><path mask="url(#SVGuhxuCM1t)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:f-nine-key",
	});
}

export default Component;
