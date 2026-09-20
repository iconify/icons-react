import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n28sx5w0p.css';
import '../../css/h/h81cxxbry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n28sx5w0p"/><path class="h81cxxbry ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-workplace-search",
	});
}

export default Component;
