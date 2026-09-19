import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pb418gb3z.css';
import '../../css/q/q-c3nrjwl.css';
import '../../css/k/k7vaebzuk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUrLoXbLe"><g class="s9cl3zbei"><path class="pb418gb3z"/><path class="q-c3nrjwl"/><ellipse class="k7vaebzuk"/></g></mask></defs><path mask="url(#SVGUrLoXbLe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:french-fries",
	});
}

export default Component;
