import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-sj49_df.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/m/mzx-9l7rh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGutPKmbqV"><g class="ft5dv1b6b"><path class="b-sj49_df"/><path class="q0fujjtaq"/><path class="mzx-9l7rh"/></g></mask></defs><path mask="url(#SVGutPKmbqV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:battery-full",
	});
}

export default Component;
